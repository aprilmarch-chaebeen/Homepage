interface Project {
  title: string;
  descript: string;
  imgsrc: string;
  category: string[];
  flag: string;
  num: number;
}

interface PaginateProps {
  projects: Project[];
  currentIdx: number;
  selectedCategory: string;
  slideNum: number;
}

export const Paginate = ({projects, currentIdx, selectedCategory, slideNum}: PaginateProps) => {
  // 카테고리 중복 체크
  const filteredProjects = projects.filter((project) => project.category.includes(selectedCategory) || selectedCategory === 'all');

  const startIndex = (currentIdx - 1) * slideNum;
  const endIndex = startIndex + slideNum;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProjects.length / slideNum);

  return {currentProjects, totalPages};
};
