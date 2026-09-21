package com.hamarashops.business.contact.service;

import com.hamarashops.business.contact.model.AppointmentRequest;
import com.hamarashops.business.contact.model.AppointmentResponse;
import com.hamarashops.business.contact.model.ContactInfo;
import com.hamarashops.business.contact.model.ContactInquiryRequest;
import com.hamarashops.business.contact.model.ContactInquiryResponse;

public interface ContactService {
    ContactInfo getContactInfo();
    ContactInquiryResponse submitInquiry(ContactInquiryRequest request);
    AppointmentResponse scheduleAppointment(AppointmentRequest request);
}


