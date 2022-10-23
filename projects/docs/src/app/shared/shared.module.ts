import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { MaterialExtensionsModule } from '../material-extensions.module';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

import { HeaderLinkComponent } from './doc-heading/header-link';
import { DocHeadingComponent } from './doc-heading/doc-heading';
import { ExampleViewer } from './example-viewer/example-viewer';
import { Navbar } from './navbar/navbar';
import { CopierService } from './copier/copier.service';
import { NavigationFocus } from './navigation-focus/navigation-focus';
import { DocViewer } from './doc-viewer/doc-viewer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MaterialExtensionsModule,
    FlexLayoutModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    NgOptionHighlightModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MaterialExtensionsModule,
    FlexLayoutModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    NgOptionHighlightModule,

    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewer,
    DocViewer,
    Navbar,
    NavigationFocus,
  ],
  declarations: [
    HeaderLinkComponent,
    DocHeadingComponent,
    ExampleViewer,
    DocViewer,
    Navbar,
    NavigationFocus,
  ],
  providers: [CopierService],
})
export class SharedModule {}
