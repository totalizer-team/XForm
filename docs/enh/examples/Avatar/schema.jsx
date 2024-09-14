const schema = {
  imageAvatar: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '图片头像',
    alt: 'alt content',
    src: '/avatar_4.jpeg',
    size: 64,
  },
  textAvatar: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '文字头像',
    alt: 'alt content',
    content: 'T',
    bgColor: 'orange',
  },
  textBgAvatar1: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '文字头像背景颜色1',
    alt: 'alt content',
    content: 'T',
    bgColor: '#1890ff',
    size: 64,
  },

  avatarGroup: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '头像组',
    alt: 'alt content',
    src: [
      '/avatar_1.jpeg',
      '/avatar_2.jpeg',
      '/avatar_3.jpeg',
      '/avatar_4.jpeg',
    ],
    size: 32,
  },
};

export default schema;
