"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
class ResourceService {
    resources;
    constructor(initialResources) {
        this.resources = initialResources;
    }
    addResource(resource) {
        this.resources.push(resource);
        return this.resources;
    }
    updateResource(updatedResource) {
        const index = this.resources.findIndex((r) => r.id === updatedResource.id);
        if (index !== -1) {
            this.resources[index] = { ...this.resources[index], ...updatedResource };
        }
        return this.resources;
    }
    removeResource(id) {
        this.resources = this.resources.filter((r) => r.id !== id);
        return this.resources;
    }
    getResources() {
        return [...this.resources];
    }
}
exports.ResourceService = ResourceService;
