import { Component } from '@angular/core';
import { VaultService, MyCustomSession } from '../vault.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private vaultService: VaultService) { }

  async store() {
    const session: MyCustomSession = { data: '123', username: 'blar', token: 'blar' };
    console.log('Session saved');
    await this.vaultService.saveSession(session);
    await this.vaultService.lockOut();
    alert('Locked. Has stored session is ' + await this.vaultService.hasStoredSession());
  }

  async restore() {
    const session: MyCustomSession = await this.vaultService.restoreSession();
    console.log('Session Restored is', JSON.stringify(session));
  }

}
