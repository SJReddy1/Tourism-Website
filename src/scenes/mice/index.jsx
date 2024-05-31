import './style.css';

const Mice = () => {
  const arr = [
    {
      image1: "https://arabianark.ae/images/mice-image/meetings-incentives-conferences-events.jpg",
      image2: "https://arabianark.ae/images/mice-image/jio-world.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/mice-6.jpg",

      image2: "https://arabianark.ae/images/mice-image/convention-Centre-Awards.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/mice-6.jpg",

      image2: "https://arabianark.ae/images/mice-image/mice-img7.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/mice-img7.jpg",

      image2: "https://arabianark.ae/images/mice-image/miceimg-2.jpeg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/mice-3.jpeg",

      image2: "https://arabianark.ae/images/mice-image/mice.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/mice-img7.jpg",

      image2: "https://arabianark.ae/images/mice-image/mice-4.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/mice-4.jpg",

      image2: "https://arabianark.ae/images/mice-image/time-out-kid.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/meetings-incentives-conferences-events.jpg",

      image2: "https://arabianark.ae/images/mice-image/meeting_russia4.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/convention-Centre-Awards.jpg",

      image2: "https://arabianark.ae/images/mice-image/meeting-group.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/tok-img.jpg",

      image2: "https://arabianark.ae/images/mice-image/tok-awards-winners-stage.jpg",

    },
    {
      image1: "https://arabianark.ae/images/mice-image/mice-1.jpeg",

      image2: "https://arabianark.ae/images/mice-image/mice-5.png",

    }
  ]

  return (
    <>

      <div className="mice">

        {arr.map((item, idx) => {
          return (
            <div className={`wrapper item-${idx + 1}`}>
              <div className='big-box'>
                <div className='small-box'>
                  <div className='box-1'><img src={item.image1} alt={item.image1} /></div>
                  <div className='box-2'><img src={item.image2} alt={item.image1} /></div>
                  <div className='box-3'><img src={item.image1} alt={item.image1} /></div>
                  <div className='box-4'><img src={item.image2} alt={item.image1} /></div>
                </div>
              </div>
            </div>)
        })}
      </div>
    </>
  );
};

export default Mice;
