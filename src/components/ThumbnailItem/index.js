// Write your code here.
import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  render() {
    const {
      id,
      thumbnailUrl,
      thumbnailAltText,
      thumbNailClicked,
      isActive,
    } = this.props
    const onClickedThumb = () => {
      thumbNailClicked(id)
    }

    const Active = isActive ? 'active' : ''
    return (
      <li>
        <button>
          <img
            className={`thumbNail ${Active}`}
            src={thumbnailUrl}
            alt={thumbnailAltText}
            onClick={onClickedThumb}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
