'use client'
import Link from 'next/link'

export default function ListItem({ result }) {
    return (
        <div>
            {JSON.parse(result).map((data, i) =>
                <div className="list-item" key={i}>
                    <Link href={'/board/detail/' + data._id}>{data.title}</Link>
                    <Link href={'/board/edit/' + data._id} className="list-btn">✏️</Link>
                    <span className='list-btn' onClick={(e) => {
                        fetch('/api/post/delete/'+data._id, { method: 'DELETE', body: data._id })
                            .then((r) => {
                                return r.json()
                            })
                            .then((r) => {
                                console.log(r)
                                e.target.parentElement.style.opacity = 0
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'

                                }, 1000)
                            })
                    }}>🗑️</span>
                    <p>{data.contents}</p>
                </div>
            )}
        </div>
    )
}