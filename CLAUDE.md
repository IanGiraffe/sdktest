# Giraffe SDK Documentation Explorer

## Project Overview

This project is designed to explore and improve the Giraffe SDK documentation. The main goal is to systematically investigate SDK functions, validate their behavior against existing documentation, and create enhanced documentation where needed.

## Project Structure

```
C:\Dev\Apps\sdktest\
├── giraffe_docs\
│   ├── docs-condensed.md     # Existing Giraffe SDK documentation
│   └── new_docs.md         # Enhanced documentation being built
├── app.js                  # Test application for SDK exploration
└── CLAUDE.md              # This file (project instructions)
```

## Exploration Workflow

When the user asks questions about exploring SDK functions:

1. **Check Existing Documentation**: First, look at `C:\Dev\Apps\sdktest\giraffe_docs\current_docs.md` to see if the question is clearly answered there.

2. **Validate Answer**: If the existing documentation appears to answer the question satisfactorily, validate that the answer is complete and accurate.

3. **Update Enhanced Documentation**: If the user is satisfied with the answer from the existing docs, add the relevant documentation section to `C:\Dev\Apps\sdktest\giraffe_docs\new_docs.md`, maintaining proper structure and organization.

4. **Maintain Organization**: Ensure the new documentation maintains:
   - Clear hierarchical structure
   - Consistent formatting
   - Code examples where appropriate  
   - Proper cross-references between related functions
   - Type information and parameter details

## SDK Functions Status

Based on the existing CLAUDE.md exploration notes, here's the current understanding:

### Working Functions
- ✅ `rpc.invoke('getSelectedFeatures')` - Returns selected features with geometry
- ✅ `giraffeState.get('rawSections')` - Returns user-drawn features
- ✅ `giraffeState.get('mapView')` - Returns map state information
- ✅ `giraffeState.get('project')` - Returns basic project metadata

### Functions Needing Investigation  
- ❓ `giraffeState.get('bakedSections')` - Might contain processed boundaries
- ❓ `fetchProjectDetails()` RPC function - For detailed project data
- ❓ `getLayerContents('layer-name')` RPC calls - For accessing layer data
- ❓ Project boundary access methods - Current methods return empty data

### Known Issues
- `giraffeState.get('projects')` - Returns empty FeatureCollection
- `giraffeState.get('projectLayers')` - Returns 0 layers despite project having layers
- Project boundary not accessible through expected methods

## Documentation Standards

When updating the new documentation:

1. **Function Signatures**: Include complete function signatures with parameter types
2. **Return Types**: Clearly specify what each function returns
3. **Examples**: Provide practical code examples for each function
4. **Error Handling**: Include information about potential errors or edge cases
5. **Cross-References**: Link related functions together
6. **Status Indicators**: Use clear status indicators (✅ Working, ❌ Not Working, ❓ Needs Investigation)

## Key Insights for Exploration

- The SDK connection is stable and functions are returning data
- The main challenge is understanding where different types of data are stored
- Selected features might contain the project boundary information
- Raw sections contain actual geometry data that can be used
- Some documentation gaps exist around project boundary access and layer management

## Important Notes

- Always test functions thoroughly before documenting them
- Validate that examples in documentation actually work
- Pay attention to data structure consistency between related functions
- Note any discrepancies between documented behavior and actual behavior
- Update status tracking as new information is discovered