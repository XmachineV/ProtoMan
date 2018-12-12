import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProtRegionModule } from './region/region.module';
import { ProtCountryModule } from './country/country.module';
import { ProtLocationModule } from './location/location.module';
import { ProtDepartmentModule } from './department/department.module';
import { ProtTaskModule } from './task/task.module';
import { ProtEmployeeModule } from './employee/employee.module';
import { ProtJobModule } from './job/job.module';
import { ProtJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ProtRegionModule,
        ProtCountryModule,
        ProtLocationModule,
        ProtDepartmentModule,
        ProtTaskModule,
        ProtEmployeeModule,
        ProtJobModule,
        ProtJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProtEntityModule {}
