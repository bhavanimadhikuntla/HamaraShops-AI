package com.hamarashops.business.content.controller;

import com.hamarashops.business.exception.ResourceNotFoundException;
import com.hamarashops.business.content.model.SolutionContent;
import com.hamarashops.business.content.service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/solutions")
public class SolutionController {

    private final ContentService contentService;

    public SolutionController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping
    public ResponseEntity<List<SolutionContent>> getAllSolutions() {
        return ResponseEntity.ok(contentService.getAllSolutions());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<SolutionContent> getSolutionBySlug(@PathVariable String slug) {
        return contentService.getSolutionBySlug(slug)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new ResourceNotFoundException("Solution not found with identifier: " + slug));
    }
}


