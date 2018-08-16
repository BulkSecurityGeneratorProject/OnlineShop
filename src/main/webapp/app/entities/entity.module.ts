import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OnlineShopCategoryModule } from './category/category.module';
import { OnlineShopProductModule } from './product/product.module';
import { OnlineShopCustomerModule } from './customer/customer.module';
import { OnlineShopAddressModule } from './address/address.module';
import { OnlineShopWishlistModule } from './wishlist/wishlist.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        OnlineShopCategoryModule,
        OnlineShopProductModule,
        OnlineShopCustomerModule,
        OnlineShopAddressModule,
        OnlineShopWishlistModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlineShopEntityModule {}
