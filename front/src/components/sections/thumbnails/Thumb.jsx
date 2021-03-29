import React from 'react';

function Thumb({ thumbnails, goToProduct, thumbClass, mainUrl }) {
  const buildUrl = (url) => {
    if (url.includes('http')) return url;
    if (!mainUrl) return null;
    return mainUrl + url;
  };
  const thumb = thumbnails.map(
    ({ id, src, img, title, price, size, bedrooms, beds, garages, description }, idx) => {
      const link = `catalog/${src}`;
      return (
        <div className={thumbClass} key={title + idx}>
          <div className="thumbnail">
            <span onClick={() => goToProduct(link)} className="thumbnail__link pointer">
              <div className="thumbnail__link-inner">
                <img src={buildUrl(img[0].src)} alt={title} className="thumbnail__link-img" />
              </div>
            </span>
            <span onClick={() => goToProduct(link)} className="thumbnail__link pointer">
              <h3 className="thumbnail__title">{title}</h3>
            </span>
            <div className="price">
              ${price}/ <span>месяц</span>
            </div>
            <div className="thumbnail-properties">
              <div className="thumbnail-properties__item">
                <img src={buildUrl('images/dist/svg/arh.svg')} alt="" />
                {size} кв. м.
              </div>
              <div className="thumbnail-properties__item">
                <img src={buildUrl('images/dist/svg/room.svg')} alt="" />
                Спален: {bedrooms}
              </div>
              <div className="thumbnail-properties__item">
                <img src={buildUrl('images/dist/svg/bed.svg')} alt="" />
                Кроватей: {beds}
              </div>
              <div className="thumbnail-properties__item">
                <img src={buildUrl('images/dist/svg/parking-area.svg')} alt="" />
                Стояночных мест: {garages}
              </div>
            </div>
            <div className="thumbnail__description">{description}</div>
          </div>
        </div>
      );
    },
  );
  return <div className="row">{thumb}</div>;
}

export default Thumb;
