/*
 * Copyright 2015-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Directive } from '@angular/core';
import { LogService } from '../../log.service';

/**
 * ONOS GUI -- Apps -- Trigger Form Directive
 */
@Directive({
  selector: '[onosTriggerForm]'
})
export class TriggerFormDirective {

    constructor(
        private log: LogService,
    ) {
        this.log.debug('TriggerFormDirective constructed');
    }

}
