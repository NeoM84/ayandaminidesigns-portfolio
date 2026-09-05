import { WorkSection, VideoShowcaseItem } from '../types';

export const selectedWorkSections: WorkSection[] = [
  {
    id: 'custom-award-design',
    sectionNumber: '01',
    heading: 'Custom Award Design',
    tagline: 'Illustrator Design Work',
    items: [
      {
        id: 'cad-01',
        workId: 'WORK ID: CAD-001',
        title: 'Custom Award Design',
        description: '',
        imageUrl: 'assets/CustomAwardDesignMain.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: 'Illustrator Design'
      },
      {
        id: 'cad-02',
        workId: 'WORK ID: CAD-002',
        title: '',
        description: '',
        imageUrl: 'assets/Trophydesignconcept.png',
        altText: '',
        aspectRatio: 'tall',
        meta: ''
      },
      {
        id: 'cad-03',
        workId: 'WORK ID: CAD-003',
        title: '',
        description: '',
        imageUrl: 'assets/Screenshot2025.png',
        altText: '',
        aspectRatio: 'landscape',
        meta: ''
      },
      {
        id: 'cad-04',
        workId: 'WORK ID: CAD-004',
        title: '',
        description: '',
        imageUrl: 'assets/Artboard1.png',
        altText: '',
        aspectRatio: 'banner',
        meta: ''
      },
      {
        id: 'cad-05',
        workId: 'WORK ID: CAD-005',
        title: '',
        description: '',
        imageUrl: 'assets/CustomAwardDesign.png',
        altText: '',
        aspectRatio: 'landscape',
        meta: ''
      }
    ]
  },
  {
    id: 'inspire-work',
    sectionNumber: '02',
    heading: 'Inspire Work',
    tagline: 'Graphics, Multimedia',
    items: [
      {
        id: 'ins-01',
        workId: 'WORK ID: INS-001',
        title: 'Design Projects',
        description: '',
        imageUrl: 'assets/ApprovedDesign.png',
        altText: '',
        aspectRatio: 'square',
        meta: ''
      },
      {
        id: 'ins-02',
        workId: 'WORK ID: INS-002',
        title: '',
        description: '',
        imageUrl: 'assets/Frame.png',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ins-03',
        workId: 'WORK ID: INS-003',
        title: '',
        description: '',
        imageUrl: 'assets/SURVEYCAMPAIGN.png',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ins-04',
        workId: 'WORK ID: INS-004',
        title: '',
        description: '',
        imageUrl: 'assets/SocialMediaWork.png',
        altText: '',
        aspectRatio: 'widescreen',
        meta: ''
      },
      {
        id: 'ins-05',
        workId: 'WORK ID: INS-005',
        title: '',
        description: '',
        imageUrl: 'assets/GenPostFinal.png',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      }
    ]
  },
  {
    id: 'event-photography-1',
    sectionNumber: '03',
    heading: 'Event Photography',
    tagline: 'Inspire Event Photography',
    items: [
      {
        id: 'ep1-01',
        workId: 'WORK ID: EP1-001',
        title: 'Event Photography',
        description: '',
        imageUrl: 'assets/EventPicture1.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep1-02',
        workId: 'WORK ID: EP1-002',
        title: '',
        description: '',
        imageUrl: 'assets/EventPicture2.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep1-03',
        workId: 'WORK ID: EP1-003',
        title: '',
        description: '',
        imageUrl: 'assets/EventPicture3.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep1-04',
        workId: 'WORK ID: EP1-004',
        title: '',
        description: '',
        imageUrl: 'assets/EventPicture4.JPG',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep1-05',
        workId: 'WORK ID: EP1-005',
        title: '',
        description: '',
        imageUrl: 'assets/EventPicture5.JPG',
        altText: '',
        aspectRatio: 'landscape',
        meta: ''
      }
    ]
  },
  {
    id: 'portrait-photography',
    sectionNumber: '04',
    heading: 'portrait photography',
    tagline: 'Freelance Portrait Photography Project',
    items: [
      {
        id: 'ep2-01',
        workId: 'WORK ID: EP2-001',
        title: '',
        description: '',
        imageUrl: 'assets/PortraitPhoto1.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep2-02',
        workId: 'WORK ID: EP2-002',
        title: '',
        description: '',
        imageUrl: 'assets/PortraitPhoto2.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep2-03',
        workId: 'WORK ID: EP2-003',
        title: '',
        description: '',
        imageUrl: 'assets/PortraitPhoto3.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep2-04',
        workId: 'WORK ID: EP2-004',
        title: '',
        description: '',
        imageUrl: 'assets/PortraitPhoto4.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      },
      {
        id: 'ep2-05',
        workId: 'WORK ID: EP2-005',
        title: '',
        description: '',
        imageUrl: 'assets/PortraitPhoto5.jpg',
        altText: '',
        aspectRatio: 'portrait',
        meta: ''
      }
    ]
  }
];

export const videoShowcaseData: VideoShowcaseItem = {
  id: 'featured-video-reel',
  workId: 'WORK ID: VID-001',
  title: 'Syte Podcast Trailer (2024)',
  description: 'Podcast trailer for the ecommerce podcast, InSyte Ecommerce Podcast. This was edited from clips already shot from the podcast during my internship at the brand in 2024.',
  thumbnailUrl: 'assets/SytePodcastTrailer(2024)thumbnail.png',
  videoUrl: 'https://youtu.be/JEqycckC6tg',
  duration: '01:00 MIN',
  format: '4K CINEMA / 24FPS',
  client: 'Ayanda Mini Designs',
  year: '2024'
};
