import Image from 'next/image';

const componentStyles = {
  blockquote: {
    backgroundColor: '#e3e3e3',
    padding: '1em',
    borderRadius: '.25em',
    marginBottom: '1.333em',
  },
};

const MDXComponents = {
  img: (props: any) => (
    <>
      {
        // eslint-disable-next-line
      }<Image {...props} layout="responsive" loading="lazy" />
    </>
  ),
  blockquote: (props: any) => (
    <blockquote style={componentStyles.blockquote} {...props} />
  ),
};

export default MDXComponents;
