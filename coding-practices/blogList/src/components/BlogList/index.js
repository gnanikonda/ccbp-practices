import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsLists} = props
  return (
    <ul className="ulclass">
      {blogsLists.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
