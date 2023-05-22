import {
  FailureContainer,
  Img,
  FailureHeading,
  FailureParagraph,
} from './styledComponents'

const NotFound = () => (
  <FailureContainer>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <FailureHeading>Page Not Found</FailureHeading>
    <FailureParagraph>
      We are sorry, the page you requested could not be found
    </FailureParagraph>
  </FailureContainer>
)

export default NotFound
