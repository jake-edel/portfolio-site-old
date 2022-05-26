
import PortfolioListItem from './PortfolioListItem';
import { portfolioItems } from '../utils/constants.js'


const Projects = () => {

  const renderPortfolioItem = ({
    projectUrl,
    linkText,
    linkDescription
  }) => {
    return (
      <PortfolioListItem 
      to={projectUrl}
      key={projectUrl}
      linkText={linkText}
      linkDescription={linkDescription}
    />
    )
  }

  return (
     <>
        <div>
            <h2>Projects</h2>
            <ul className="project-list">
              {portfolioItems.map(renderPortfolioItem)}
            </ul>
        </div>
     </> 
  )
}
 
export default Projects;