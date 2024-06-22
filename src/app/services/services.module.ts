import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    imports: []
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders<ServicesModule> {
        console.log("Called services module providers")
        return {
            ngModule: ServicesModule,
            providers: [
            ]
        };
    }
}
export {
};


