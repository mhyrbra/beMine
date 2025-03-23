import { useState } from 'react';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [disableNo, setDisableNo] = useState(false);
  const yesButtonSize = noCount * 15 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      'نه',
      'مطمئنی؟',
      'اگه پسر خوبی باشم؟',
      'تروخدا خوشگلم',
      'بستنی کاکائویی می‌خرما',
      'با سوخاری فراوان',
      'لطفا دختر کوچولوی من',
      '))):ولی آخه',
      '!می‌میرما',
      'من مردم',
      'خب الان داری با روح مهیار حرف می‌زنی',
      'راه بیا دیگه فرشته من',
      ')):میو',
      'نه وقتشه بیام بدزدمت😡',
      'الان این دکمه رو حذف می‌کنم😏',
    ];

    if (noCount > phrases.length - 1) {
      setDisableNo(true);
      return;
    }
    return phrases[noCount];
  };

  return (
    <div className='-mt-16 flex h-screen flex-col items-center justify-center'>
      {yesPressed ? (
        <>
          <img src='https://gifdb.com/images/high/love-cute-white-puffy-bear-sticker-6370meeebdiv0b8s.webp' />
          <div className='my-4 text-4xl font-bold'>هورا!! عاشقتم فسقلی من</div>
        </>
      ) : (
        <>
          <img
            className='h-[300px]'
            src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
          />
          <h1 className='my-4 text-3xl mb-8'>موست کنم دافالو؟</h1>
          <div className='flex items-center'>
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              معلومه که آره
            </button>
            {!disableNo && (
              <button
                onClick={handleNoClick}
                className='rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700'
              >
                {noCount === 0 ? 'نه' : getNoButtonText()}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
