/**
 * Basic recommendation logic to suggest related courses.
 * If there's an active search or category selection, recommends courses that match.
 * Excludes the current course (if viewed).
 */
export const getRecommendations = (courses, selectedCategory, searchKeyword, currentCourseId = null) => {
    const filtered = courses.filter((course) => {
        // Never recommend the currently viewed course
        if (currentCourseId && course.id === currentCourseId) return false;

        const isCategoryMatch = selectedCategory && course.category === selectedCategory;
        const isSearchMatch = searchKeyword && (
            course.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            course.category.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchKeyword.toLowerCase()))
        );

        // Prioritize context matches when available
        if (selectedCategory || searchKeyword) {
            return isCategoryMatch || isSearchMatch;
        }

        // Default recommendation criteria (e.g. highly rated courses)
        return course.rating >= 4.7;
    });

    // Limit to 3 recommendations, add some simple randomization
    return filtered.sort((a, b) => b.rating - a.rating).slice(0, 3);
};
