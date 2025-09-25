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
        const boundary = giraffeState.get('projectBoundary');
        displayOutput('projectOutput', boundary);
    } catch (error) {
        displayOutput('projectOutput', { error: error.message });
    }
}
