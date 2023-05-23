import { Image } from 'react-bootstrap'

function Avatar ({ src, height }) {
  return (
      <Image style={{
        height,
        marginBottom: 10,
        borderRadius: 5
      }}
         src={src} alt='avatar'
      />
  )
}

export default Avatar;

