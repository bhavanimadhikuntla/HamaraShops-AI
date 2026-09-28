
package com.hamarashops.business.ai.service;

import com.hamarashops.business.content.model.CompanyContent;
import com.hamarashops.business.content.model.LocationContent;
import com.hamarashops.business.content.service.ContentDataStore;
import org.springframework.stereotype.Service;

@Service
public class CompanyAgentImpl implements CompanyAgent {

    private final GroqService groqService;
    private final ContentDataStore contentDataStore;

    public CompanyAgentImpl(
            GroqService groqService,
            ContentDataStore contentDataStore) {

        this.groqService = groqService;
        this.contentDataStore = contentDataStore;
    }

    @Override
    public String handle(String message) {

        // Get company information from company.json
        CompanyContent company = contentDataStore.getCompany();

        // Build location information from company.json
        StringBuilder locations = new StringBuilder();

        if (company.getLocations() != null && !company.getLocations().isEmpty()) {

            int index = 1;

            for (LocationContent location : company.getLocations()) {

                locations.append(index++)
                        .append(". ")
                        .append(location.getCountry());

                if (location.getType() != null && !location.getType().isBlank()) {
                    locations.append(" - ")
                            .append(location.getType());
                }

                locations.append("\n\n");

                if (location.getCity() != null && !location.getCity().isBlank()) {
                    locations.append("City:\n")
                            .append(location.getCity())
                            .append("\n\n");
                }

                if (location.getAddress() != null && !location.getAddress().isBlank()) {
                    locations.append("Address:\n")
                            .append(location.getAddress())
                            .append("\n\n");
                }

                if (location.getPhone() != null && !location.getPhone().isBlank()) {
                    locations.append("Phone:\n")
                            .append(location.getPhone())
                            .append("\n\n");
                }

                if (location.getEmail() != null && !location.getEmail().isBlank()) {
                    locations.append("Email:\n")
                            .append(location.getEmail())
                            .append("\n\n");
                }

                if (location.getWebsite() != null && !location.getWebsite().isBlank()) {
                    locations.append("Website:\n")
                            .append(location.getWebsite())
                            .append("\n\n");
                }
            }

        } else {
            locations.append("No company location information is currently available.");
        }

        String systemPrompt = """
        You are the Company Agent for HamaraShops.ai.

        Your responsibility is to answer questions about
        HamaraShops.ai using the company information provided below.

        =========================================================
        COMPANY INFORMATION
        =========================================================

        Company Name:
        %s

        Headline:
        %s

        CEO:
        %s

        Designation:
        %s

        Mission:
        %s

        Vision:
        %s

        Approach:
        %s

        Journey:
        %s

        =========================================================
        COMPANY LOCATIONS
        =========================================================

        The following location information is loaded directly
        from company.json:

        %s

        LOCATION RULES:

        - If the user asks where HamaraShops.ai is located,
          provide the available office locations.
        - If the user asks for the headquarters, identify the
          location whose type is "Headquarters".
        - If the user asks about a specific country or city,
          provide the matching location information.
        - If the user asks for a phone number, email address,
          or website, provide the relevant information from
          the available company locations.
        - Do not invent additional offices or locations.
        - Do not guess missing location information.

        =========================================================
        COMPANY SOLUTION AREAS
        =========================================================

        HamaraShops.ai focuses on AI and Generative AI solutions
        for modern businesses.

        Key solution areas include:

        - AI-powered customer experiences
        - Intelligent search and discovery
        - Personalization
        - Generative AI
        - Intelligent automation
        - AI-powered content generation
        - Intelligent business workflows
        - AI architecture and enterprise AI solutions

        =========================================================
        INDUSTRIES
        =========================================================

        Industries presented by HamaraShops.ai include:

        - Retail
        - Financial Services
        - Media & Entertainment
        - Healthcare & Life Sciences
        - Manufacturing

        =========================================================
        IMPORTANT RULES
        =========================================================

        - Use the company information provided above when answering
          company-related questions.
        - Use the location information provided above when answering
          location-related questions.
        - Do not invent company information.
        - Do not guess missing information.
        - If a requested company detail is not available in the
          provided information, clearly say that the information
          is not currently available.
        - Do not invent customers, partnerships, revenue figures,
          employee counts, locations, certifications or business
          results.
        - If the user asks about a specific industry, explain that
          the Industry Agent specializes in industry-specific
          questions.
        - If the user wants to schedule a meeting or consultation,
          explain that the Appointment Agent handles scheduling.
        - If the question is unrelated to HamaraShops.ai, politely
          explain that you are the HamaraShops.ai Company Agent.

        =========================================================
        RESPONSE STYLE
        =========================================================

        Answer clearly, professionally and concisely.

        Give the direct answer first and avoid unnecessary details.

        For location questions, present multiple locations as a
        simple bullet list when appropriate.

        """.formatted(
                company.getName(),
                company.getHeadline(),
                company.getCeo(),
                company.getDesignation(),
                company.getMission(),
                company.getVision(),
                company.getApproach(),
                company.getJourney(),
                locations.toString()
        );

        return groqService.chat(systemPrompt, message);
    }
}

