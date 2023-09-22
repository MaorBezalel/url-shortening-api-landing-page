import '../../styles/css/style.css';

import {useState, useEffect, useRef} from 'react';
import { useList, useLocalStorage  } from "@uidotdev/usehooks";

export default function ShortenURLForm() {
    const apiURL = "https://api.shrtco.de/v2/shorten?url=";
    const maxShortenURLs = 5;
    const API_ERROR = {
        NO_URL: 1,
        INVALID_URL: 2,
        DISALLOWED_URL: 10,
    };


    const inputFieldRef = useRef(null); 
    const [isLoading, setIsLoading] = useState(false);
    const [inputErrorClass, setInputErrorClass] = useState('');
    const [shortenURLs, {set, push, removeAt}] = useList([]);
    const [localStorage, setLocalStorage] = useLocalStorage('shortenURLs', shortenURLs);

    useEffect(() => {
        set(localStorage);
    }, []);

    useEffect(() => {
        setLocalStorage(shortenURLs);
    }, [shortenURLs, push, removeAt]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            fetch(`${apiURL}${inputFieldRef.current.value}`)
            .then((response) => response.json())
            .then((data) => {
                data.ok ? addNewShortenURL(data.result.original_link, data.result.full_short_link) : displayInputError(data.error_code);
            })
            .catch((error) => {
                console.error(error);
                setInputErrorClass(' error--default');
            })
            .finally(() => {
                setIsLoading(false);
            });
        }, 1000);
    }
    
    const handleCopyBtnClick = (e) => {
        const index = e.target.value;
        const shortenURL = shortenURLs[index].shorten;
        console.log(shortenURL)

        navigator.clipboard.writeText(shortenURL)
            .then(() => {
                e.target.textContent = 'Copied!';
                e.target.classList.add('copied');
                setTimeout(() => {
                    e.target.textContent = 'Copy';
                    e.target.classList.remove('copied');
                }, 2000);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const addNewShortenURL = (newOriginalURL, newShortenURL) => {
        const index = shortenURLs.findIndex(shortenURL => shortenURL.original === newOriginalURL);

        if (index !== -1) {
            removeAt(index);
        } else if (shortenURLs.length === maxShortenURLs) {
            removeAt(0);
        }

        push({
            original: newOriginalURL,
            shorten: newShortenURL
        });

        inputFieldRef.current.value = '';
        setInputErrorClass('');
    }

    const displayInputError = (error_code) => {
        switch (error_code) {
            case API_ERROR.NO_URL:
                setInputErrorClass(' error--no-url');
                break;
            case API_ERROR.INVALID_URL: case API_ERROR.DISALLOWED_URL:
                setInputErrorClass(' error--invalid-url');
                break;
            default:
                setInputErrorClass(' error--default');
                break;
        }
    }
    
    const removeInputError = () => {
        setInputErrorClass('');
    }

    return (
        <form className="shorten-url-form wrapper" onSubmit={handleFormSubmit}>
            <URLInput
                inputFieldRef={inputFieldRef}
                inputErrorClass={inputErrorClass}
                removeInputError={removeInputError}
                isLoading={isLoading}
            />
            <URLOutput 
                shortenURLs={shortenURLs}
                handleCopyBtnClick={handleCopyBtnClick}
                removeAt={removeAt}
            />
        </form>
    );
}

function URLInput({inputFieldRef, inputErrorClass, removeInputError, isLoading}) {
    return (
        <section id="url-input-wrapper" className="wrapper">
            <div className="url-input container">
                <label className={"url-input__label" + inputErrorClass} htmlFor="input-field">
                    <input
                        id="input-field"
                        className="url-input__field"
                        type="text" placeholder="Shorten a link here..."
                        ref={inputFieldRef}
                        onChange={removeInputError}
                    />
                </label>
                <button className="url-input__sumbit-btn" type="submit">
                    {isLoading ? <div className="loading-circle"/> : "Shorten It!"}
                </button>
            </div>
        </section>
    );
}

function URLOutput({shortenURLs, handleCopyBtnClick, removeAt}) {
    return (
        <section id="url-output-wrapper" className="wrapper">
            <div className="url-output container">
                {shortenURLs.map((shortenURL, index) => {
                    return (
                        <ShortURL
                            key={index}
                            index={index}
                            original={shortenURL.original}
                            shorten={shortenURL.shorten}
                            handleCopyBtnClick={handleCopyBtnClick}
                            removeAt={removeAt}
                        />
                    );
                })}
            </div>
        </section>
    );
}

function ShortURL({index, original, shorten, handleCopyBtnClick, removeAt}) {
    return (
        <div className="url-output__item">
            <p className="url-output__original-url">{original}</p>
            <hr/>
            <p className="url-output__shortened-url">{shorten}</p>
            <button className="url-output__copy-btn" type="button" value={index} onClick={handleCopyBtnClick}>Copy</button>
            <svg 
                className="url-output__remove-btn" 
                width="30" 
                height="30" 
                viewBox="0 0 26 26" 
                xmlns="http://www.w3.org/2000/svg" 
                onClick={() => removeAt(index)}
            >
                <circle cx="13" cy="13" r="12" fill="#f46262" />
                <line x1="8" y1="8" x2="18" y2="18" stroke="#FFFFFF" strokeWidth="2" />
                <line x1="8" y1="18" x2="18" y2="8" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
        </div>
    );
}