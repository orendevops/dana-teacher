export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>תפריט ניווט</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            דנה להצלחה
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                הנקודות הנכונות
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                על עצמי
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                מה אני מציעה
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                גלריה
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                לקוחות ממליצים
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                כל הצלחה מתחילה בשיחה ראשונה
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
