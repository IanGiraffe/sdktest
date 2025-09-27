import { displayOutput } from '../ui/ui.js';

export function getAllViews(giraffeState) {
    try {
        console.log('Getting all views...');
        const views = giraffeState.get('views');

        const output = {
            timestamp: new Date().toISOString(),
            action: 'getAllViews',
            data: views,
            dataType: Array.isArray(views) ? 'array' : typeof views,
            count: Array.isArray(views) ? views.length : 'N/A'
        };

        console.log('Views data:', output);
        displayOutput('viewsOutput', output);
    } catch (error) {
        console.error('Error getting views:', error);
        displayOutput('viewsOutput', { error: error.message });
    }
}

export function analyzeViewStructure(giraffeState) {
    try {
        console.log('Analyzing view structure...');
        const views = giraffeState.get('views');

        if (!views || !Array.isArray(views)) {
            displayOutput('viewsOutput', {
                message: 'No views data or views is not an array',
                data: views,
                type: typeof views
            });
            return;
        }

        const analysis = {
            timestamp: new Date().toISOString(),
            action: 'analyzeViewStructure',
            totalViews: views.length,
            viewAnalysis: views.map((view, index) => ({
                index,
                id: view.id || 'No ID',
                name: view.name || 'No Name',
                type: view.type || 'No Type',
                keys: Object.keys(view),
                hasMapState: !!view.mapState,
                hasFilters: !!view.filters,
                hasConfig: !!view.config,
                structure: view
            })),
            commonProperties: views.length > 0 ?
                Object.keys(views[0]).sort() : [],
            summary: {
                withNames: views.filter(v => v.name).length,
                withMapState: views.filter(v => v.mapState).length,
                withFilters: views.filter(v => v.filters).length,
            }
        };

        console.log('View structure analysis:', analysis);
        displayOutput('viewsOutput', analysis);
    } catch (error) {
        console.error('Error analyzing view structure:', error);
        displayOutput('viewsOutput', { error: error.message });
    }
}

export function getViewDetails(giraffeState) {
    try {
        console.log('Getting detailed view information...');
        const views = giraffeState.get('views');

        if (!views || !Array.isArray(views) || views.length === 0) {
            displayOutput('viewsOutput', {
                message: 'No views available for detailed analysis',
                data: views
            });
            return;
        }

        // Get detailed info for each view
        const detailedViews = views.map((view, index) => {
            const detail = {
                index,
                fullView: view,
                metadata: {
                    id: view.id,
                    name: view.name,
                    description: view.description,
                    type: view.type,
                    created: view.created_at || view.createdAt,
                    updated: view.updated_at || view.updatedAt,
                    owner: view.owner || view.created_by
                },
                content: {}
            };

            // Analyze map state if present
            if (view.mapState) {
                detail.content.mapState = {
                    zoom: view.mapState.zoom,
                    center: view.mapState.center,
                    bounds: view.mapState.bounds,
                    layers: view.mapState.layers,
                    keys: Object.keys(view.mapState)
                };
            }

            // Analyze filters if present
            if (view.filters) {
                detail.content.filters = {
                    type: typeof view.filters,
                    isArray: Array.isArray(view.filters),
                    count: Array.isArray(view.filters) ? view.filters.length : 'N/A',
                    data: view.filters
                };
            }

            // Analyze configuration if present
            if (view.config) {
                detail.content.config = {
                    keys: Object.keys(view.config),
                    data: view.config
                };
            }

            return detail;
        });

        const output = {
            timestamp: new Date().toISOString(),
            action: 'getViewDetails',
            totalViews: views.length,
            detailedViews
        };

        console.log('Detailed view information:', output);
        displayOutput('viewsOutput', output);
    } catch (error) {
        console.error('Error getting view details:', error);
        displayOutput('viewsOutput', { error: error.message });
    }
}