import { Injectable } from '@angular/core';

@Injectable()
export class YoutubePlayerService {
  ytPlayer: YT.Player;

  constructor() {}

  /**
   * Initializes player for the application.
   * @param player The default player to use.
   */
  initPlayer(player: any) {
    this.ytPlayer = player;
  }
  playAudio(): void {
    this.ytPlayer.playVideo();
  }
  loadAudioById(id: string): void {
    this.ytPlayer.loadVideoById(id);
  }
  onStateChange(event: any, repeat: boolean = false): void {
    switch (event.data) {
      case 0:
        if (repeat) {
          this.playAudio();
        }
        break;
    }
  }

  // /**
  //  * Sets the current language.
  //  * Note: The current language is saved to the local storage.
  //  * If no parameter is specified, the language is loaded from local storage (if present).
  //  * @param language The IETF language code to set.
  //  */
  // set language(language: string) {
  //     language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
  //     let isSupportedLanguage = includes(this.supportedLanguages, language);
  //
  //     // If no exact match is found, search without the region
  //     if (language && !isSupportedLanguage) {
  //         language = language.split('-')[0];
  //         language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
  //         isSupportedLanguage = Boolean(language);
  //     }
  //
  //     // Fallback if language is not supported
  //     if (!isSupportedLanguage) {
  //         language = this.defaultLanguage;
  //     }
  //
  //     log.debug(`Language set to ${language}`);
  //     this.translateService.use(language);
  // }
  //
  // /**
  //  * Gets the current language.
  //  * @return The current language code.
  //  */
  // get language(): string {
  //     return this.translateService.currentLang;
  // }
}
