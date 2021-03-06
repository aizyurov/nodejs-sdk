// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';
import { Session } from '../../../../index.js';

export interface TranslatedText {
    /**
     * Translated text.
     */
    text?: string;

    /**
     * The language code of the source text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    detectedLanguageCode?: string;
}

export interface Language {
    /**
     * The language code.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    code?: string;

    /**
     * The name of the language (for example, `` English ``).
     */
    name?: string;
}

/**
 * A set of methods for the Yandex Translate service.
 */
export class TranslationService {
    constructor(session?: Session);
    /**
     * Translates the text to the specified language.
     */
    translate(request: TranslateRequest): Promise<TranslateResponse>;

    /**
     * Detects the language of the text.
     */
    detectLanguage(
        request: DetectLanguageRequest
    ): Promise<DetectLanguageResponse>;

    /**
     * Retrieves the list of supported languages.
     */
    listLanguages(
        request: ListLanguagesRequest
    ): Promise<ListLanguagesResponse>;
}

export interface TranslateRequest {
    /**
     * The text language to translate from.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * Required for translating with glossary.
     */
    sourceLanguageCode?: string;

    /**
     * The target language to translate the text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    targetLanguageCode: string;

    /**
     * Format of the text.
     */
    format?: TranslateRequest.Format;

    /**
     * Array of the strings to translate.
     * The maximum total length of all strings is 10000 characters.
     */
    texts?: string[];

    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId?: string;

    /**
     * Do not specify this field, custom models are not supported yet.
     */
    model?: string;

    /**
     * Glossary to be applied for the translation. For more information, see [Glossaries](/docs/translate/concepts/glossary).
     */
    glossaryConfig?: TranslateGlossaryConfig;
}

export namespace TranslateRequest {
    export enum Format {
        FORMAT_UNSPECIFIED = 0,

        /**
         * Text without markup. Default value.
         */
        PLAIN_TEXT = 1,

        /**
         * Text in the HTML format.
         */
        HTML = 2,
    }
}

export interface TranslateGlossaryConfig {
    /**
     * Pass glossary data in the request. Currently, only this way to pass glossary is supported.
     */
    glossaryData?: GlossaryData;
}

export interface GlossaryData {
    /**
     * Array of text pairs.
     *
     * The maximum total length of all source texts is 10000 characters.
     * The maximum total length of all translated texts is 10000 characters.
     */
    glossaryPairs?: GlossaryPair[];
}

export interface GlossaryPair {
    /**
     * Text in the source language.
     */
    sourceText: string;

    /**
     * Text in the target language.
     */
    translatedText: string;
}

export interface TranslateResponse {
    /**
     * Array of the translations.
     */
    translations?: TranslatedText[];
}

export interface DetectLanguageRequest {
    /**
     * The text to detect the language for.
     */
    text: string;

    /**
     * List of the most likely languages. These languages will be given preference when detecting the text language.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * To get the list of supported languages, use a [TranslationService.ListLanguages] request.
     */
    languageCodeHints?: string[];

    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId?: string;
}

export interface DetectLanguageResponse {
    /**
     * The text language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * To get the language name, use a [TranslationService.ListLanguages] request.
     */
    languageCode?: string;
}

export interface ListLanguagesRequest {
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId?: string;
}

export interface ListLanguagesResponse {
    /**
     * List of supported languages.
     */
    languages?: Language[];
}
