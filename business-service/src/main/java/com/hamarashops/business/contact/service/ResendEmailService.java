package com.hamarashops.business.contact.service;

import com.hamarashops.business.contact.model.AppointmentRequest;
import com.hamarashops.business.contact.model.ContactInquiryRequest;

public interface ResendEmailService {
    String sendInquiryEmail(ContactInquiryRequest request);
    String sendAppointmentEmail(AppointmentRequest request);
}



