import { Component } from '@angular/core';
import { PlayerResource } from '../../resource/playerresource.model';
import { ResourceService } from '../../resource/resource.service';
import { Resource } from '../../resource/resource.model';
import { BuiServiceService } from '../../bui-service.service';
import { LoadingService } from '../../loading.service';
import { forkJoin, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public playerResourceList: Array<PlayerResource> | undefined;
  public allResources: Array<Resource> | undefined;

  public sellResources : Array<PlayerResource> = [];

  public step: number = 0.1;

  public sellError: string = "";

  constructor(private resourceService: ResourceService, private buiService: BuiServiceService, private loading: LoadingService) {
    loading.startLoading();

    forkJoin({
      playerResource: this.resourceService.getPlayerResources(),
      allResource: this.resourceService.getAllResources()
    }).subscribe(
      responses => {
        this.playerResourceList = Object.values(responses.playerResource);
        this.allResources = responses.allResource;
        loading.endLoading();
      }
    )
  }

  public getTotal(): number {
    if(this.playerResourceList === undefined) {
      return 0;
    }
    let total = 0;
    for(let resource of this.playerResourceList) {
      total += resource.quantity;
    }
    return total;
  }

  public selectToSell(idResource: number): void {
    if(this.playerResourceList === undefined) {
      return;
    }
    let playerresource = this.playerResourceList.find((ps) => ps.id === idResource);
    let sellResource = this.sellResources.find((sr) => sr.id === idResource);

    if(playerresource === undefined || playerresource.quantity < this.step) {
      return;
    }

    playerresource.quantity = +(playerresource.quantity - this.step).toFixed(2);
    if(sellResource === undefined) {
      this.sellResources.push({id: idResource, name: playerresource.name, quantity: this.step});
    } else {
      sellResource.quantity = +(sellResource.quantity + this.step).toFixed(2);
    }
  }

  public unselectToSell(idResource: number): void {
    if(this.playerResourceList === undefined) {
      return;
    }
    let playerresource = this.playerResourceList.find((ps) => ps.id === idResource);
    let sellResource = this.sellResources.find((sr) => sr.id === idResource);

    if(playerresource === undefined || sellResource === undefined || sellResource.quantity < this.step) {
      return;
    }

    playerresource.quantity = +(playerresource.quantity + this.step).toFixed(2);
    sellResource.quantity = +(sellResource.quantity - this.step).toFixed(2);

    if(sellResource.quantity <= 0) {
      this.sellResources.splice(this.sellResources.indexOf(sellResource), 1);
    }
  }

  public getTotalSell(): number {
    if(this.allResources === undefined) {
      return 0;
    }
    let total = 0;
    for(let resource of this.sellResources) {
      let r = this.allResources.find((res) => res.id === resource.id);
      if(r === undefined) {
        return 0;
      }

      total += r.marketPrice * resource.quantity / 0.1
    }
    return +total.toFixed(2);
  }

  public sell(): void {
    this.loading.startLoading();
    this.resourceService.sellResources(this.sellResources).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        this.sellError = this.buiService.extractErrorMessage(error);
        this.loading.endLoading();
      }
    )
  }
}
