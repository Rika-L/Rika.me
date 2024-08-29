import NProgress from 'nprogress'
import router from '@/router'

NProgress.configure({ showSpinner: false })

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})
