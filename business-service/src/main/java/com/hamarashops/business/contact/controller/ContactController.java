package com.hamarashops.business.contact.controller;

import com.hamarashops.business.contact.model.AppointmentRequest;
import com.hamarashops.business.contact.model.AppointmentResponse;
import com.hamarashops.business.contact.model.ContactInfo;
import com.hamarashops.business.contact.model.ContactInquiryRequest;
import com.hamarashops.business.contact.model.ContactInquiryResponse;
import com.hamarashops.business.contact.service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public ResponseEntity<ContactInfo> getContactInfo() {
        return ResponseEntity.ok(contactService.getContactInfo());
    }

    @PostMapping("/inquire")
    public ResponseEntity<ContactInquiryResponse> submitInquiry(@RequestBody ContactInquiryRequest request) {
        ContactInquiryResponse response = contactService.submitInquiry(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/appointment")
    public ResponseEntity<AppointmentResponse> scheduleAppointment(@RequestBody AppointmentRequest request) {
        AppointmentResponse response = contactService.scheduleAppointment(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}



