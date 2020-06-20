import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent, ListFooter, ListGroupHeader } from './list.component';
import { IconModule, FormModule, ListModule, CheckboxModule, RadioModule, ToolbarModule } from '@fundamental-ngx/core';
import { PlatformButtonModule } from '../button/button.module';
import { PlatformLinkModule } from '../link/link.module';

@NgModule({
    declarations: [ListComponent, ListFooter, ListGroupHeader],
    imports: [
        CommonModule,
        IconModule,
        FormsModule,
        CheckboxModule,
        FormModule,
        ListModule,
        RadioModule,
        PlatformButtonModule,
        PlatformLinkModule,
        ToolbarModule

    ],
    exports: [ListComponent, ListFooter, ListGroupHeader]
})
export class PlatformListModule { }
