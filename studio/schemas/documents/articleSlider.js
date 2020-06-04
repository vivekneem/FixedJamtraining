import {FaSlidersH} from 'react-icons/fa'

export default {
  name: 'articleSlider',
  type: 'document',
  icon: FaSlidersH,
  title: 'Article Slider',
  description: 'Article slider for hero and tile user experiences ',
  fields: [
    {
      name: 'sliderName',
      type: 'string',
      title: 'Slider',
      description: 'Name is used to identify the slider for page layout'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Headline will be displayed on website'
    },
    {
      name: 'slideType',
      title: 'Slide Type',
      type: 'reference',
      to: {
        type: 'sliderType'
      },
      description: 'Select Slide Type'
    },
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      description: 'Add any article, image will be taken from the hero image',
      of: [
        {
          type: 'reference',
          to: [{type: 'howToArticle'}, {type: 'featureArticle'}, {type: 'galleryArticle'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'sliderName',
      subtitle: 'slideType.sliderName',
      media: 'FaSlidersH'
    }
  }
}
