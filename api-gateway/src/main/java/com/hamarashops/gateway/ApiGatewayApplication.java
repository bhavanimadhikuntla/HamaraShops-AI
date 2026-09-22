package com.hamarashops.gateway;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@SpringBootApplication
public class ApiGatewayApplication {

    @Value("${BUSINESS_SERVICE_URL:http://localhost:8082}")
    private String businessServiceUrl;

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }

    @Bean
    public CorsWebFilter corsWebFilter() {

        CorsConfiguration corsConfig = new CorsConfiguration();

        corsConfig.setAllowedOrigins(
                Arrays.asList(
                        "http://localhost:5173",
                        "http://localhost:5174",
                        "http://127.0.0.1:5173",
                        "http://127.0.0.1:5174",
                        "http://localhost:3000",
                        "https://frontend-27562154208.asia-south1.run.app",
                        "https://hamarashops.com",
                        "https://www.hamarashops.com"
                )
        );

        corsConfig.setAllowedMethods(
                Arrays.asList(
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE",
                        "OPTIONS",
                        "HEAD",
                        "PATCH"
                )
        );

        corsConfig.setAllowedHeaders(
                Arrays.asList("*")
        );

        corsConfig.setAllowCredentials(false);
        corsConfig.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration(
                "/**",
                corsConfig
        );

        return new CorsWebFilter(source);
    }

    @Bean
    public RouteLocator customRouteLocator(
            RouteLocatorBuilder builder) {

        return builder.routes()
                .route("business-service-routes", r -> r
                        .path("/api/v1/**")
                        .uri(businessServiceUrl))
                .build();
    }
}
