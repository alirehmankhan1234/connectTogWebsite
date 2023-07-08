
'use client'
import {useParams} from 'next/navigation'

export default function PortfolioById() {

    const params = useParams()

    console.log(params)

    return (
      <div>PortfolioById {params.projectId}</div>
    )
  }
  