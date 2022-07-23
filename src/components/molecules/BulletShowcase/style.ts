import {css} from '@emotion/react'

export const BulletStyle = css`
  .bullet {
    cursor: pointer;
    transition: all 150ms;
    svg {
      margin-left: 20px;
      margin-right: 20px;
      fill: #1f1f1d;
    }
    p {
      color: black;
    }
    :hover {
      svg {
        fill: #e6cd01;
      }
      p {
        color: #e6cd01;
      }
      transform: scale(1.1);
    }
  }
`
