import {describe, it, vi} from 'vitest'
import * as vueI18n from 'vue-i18n'

vi.mock('vue-i18n')

describe('sample', () => {
    it('test', () => {
        vi.spyOn(vueI18n, 'useI18n').mockReturnValue({
            t: (key: string) => `{{${key}}}`,
        })
    })
})
