import { displayOutput } from '../ui/ui.js';

export function getCurrentProject(giraffeState) {
    try {
        const project = giraffeState.get('project');
        displayOutput('projectOutput', project);
    } catch (error) {
        displayOutput('projectOutput', { error: error.message });
    }
}

export function getAllProjects(giraffeState) {
    try {
        const projects = giraffeState.get('projects');
        displayOutput('projectOutput', projects);
    } catch (error) {
        displayOutput('projectOutput', { error: error.message });
    }
}

export function getCurrentProjectBoundary(giraffeState) {
    try {
        const currentProject = giraffeState.get('project');
        const allProjects = giraffeState.get('projects');
        
        if (!currentProject || !allProjects) {
            displayOutput('projectOutput', { error: 'Project data not available' });
            return;
        }

        // Find current project boundary
        const currentProjectBoundary = allProjects.features.find(
            feature => feature.properties.id === currentProject.id
        );

        // Also check for default boundary
        const defaultBoundary = allProjects.features.find(
            feature => feature.properties.defaultBoundary === true
        );

        const result = {
            currentProjectId: currentProject.id,
            foundBoundary: !!currentProjectBoundary,
            defaultBoundary: !!defaultBoundary,
            boundaryGeometry: currentProjectBoundary?.geometry || defaultBoundary?.geometry,
            boundaryProperties: currentProjectBoundary?.properties || defaultBoundary?.properties
        };
        
        displayOutput('projectOutput', result);
    } catch (error) {
        displayOutput('projectOutput', { error: error.message });
    }
}
