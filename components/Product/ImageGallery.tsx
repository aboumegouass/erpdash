import React, { useEffect, useState } from 'react'
import { Galleria } from 'primereact/galleria';
import PropTypes from 'prop-types'

type ImageItem = {
    itemImageSrc?: string
    thumbnailImageSrc: string
    alt: string
    title: string
}
type PropsComp = {
    data: any
}
function ImageGallery(props: PropsComp) {
    const { data } = props
    const [images, setImages] = useState<ImageItem[]>([]);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        data?.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: ImageItem) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item: ImageItem) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    return (
        <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={4}
            circular
            thumbnailsPosition={'left'}
            showThumbnailNavigators={false}
            style={{ maxWidth: '640px' }}
            showItemNavigators
            showItemNavigatorsOnHover
            item={itemTemplate}
            thumbnail={thumbnailTemplate} />
    )
}

ImageGallery.propTypes = {}

export default ImageGallery
