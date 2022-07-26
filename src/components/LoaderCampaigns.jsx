import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderCampaigns = props => {
  return (
    <ContentLoader
      speed={2}
      width={900}
      height={160}
      viewBox="0 0 900 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="50%" height="38" />
      <rect x="8" y="6" rx="4" ry="4" width="50%" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="50%" height="38" />
      <rect x="8" y="55" rx="4" ry="4" width="50%" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="50%" height="38" />
      <rect x="8" y="104" rx="4" ry="4" width="50%" height="38" />
    </ContentLoader>
  )
}

export default LoaderCampaigns