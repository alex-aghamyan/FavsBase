import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './container/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { BoardComponent } from './components/board/board.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { FolderComponent } from './components/folder/folder.component';
import { ChooseItemDialogComponent } from './components/choose-item-dialog/choose-item-dialog.component';
import { ItemDialogComponent } from './components/item-dialog/item-dialog.component';

import { FilterPipe } from './utils/filter.pipe';
import { IsLimitReachedPipe } from './utils/is-limit-reached.pipe';

import { TuiAvatarModule, TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule, TuiErrorModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    BoardComponent,
    BookmarkComponent,
    ChooseItemDialogComponent,
    ItemDialogComponent,
    FolderComponent,
    FilterPipe,
    IsLimitReachedPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiDialogModule,
    TuiTextfieldControllerModule,
    TuiErrorModule
  ]
})
export class DashboardModule { }