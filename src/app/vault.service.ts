import { Injectable } from '@angular/core';
import { AuthMode, DefaultSession, IonicIdentityVaultUser, VaultConfig } from '@ionic-enterprise/identity-vault';
import { Platform } from '@ionic/angular';

export interface MyCustomSession extends DefaultSession {
    data: string;
}

@Injectable({
    providedIn: 'root',
})
export class VaultService extends IonicIdentityVaultUser<MyCustomSession> {

    constructor(platform: Platform) {
        super(platform, {
            authMode: AuthMode.BiometricOrPasscode,
            restoreSessionOnReady: false, // whether or not to immediately attempt to restore the session when the vault is ready
            unlockOnReady: false, // set true to auto prompt the user to unlock when vault is ready
            unlockOnAccess: true, // set to true to auto prompt the user to unlock on first read access
            lockAfter: 5000, // lock after 5 seconds in the background
            hideScreenOnBackground: true // when in app launcher mode hide the current screen and display the splashscreen
        });
    }

    onVaultUnlocked(config: VaultConfig) {
        console.log('Unlocked');
      }

      onVaultLocked() {
        console.log('Locked');
      }
}
