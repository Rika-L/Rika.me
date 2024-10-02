import router from '@/router'

router.beforeEach((to) => {
  const _title = to.path.split('/')[1].split('')
  if (_title[0])
    _title[0] = _title[0].toUpperCase()
  const title = _title.join('')
  if (title)
    document.title = ` ${title} | Rika.me`
  else
    document.title = 'Rika.me'
})
