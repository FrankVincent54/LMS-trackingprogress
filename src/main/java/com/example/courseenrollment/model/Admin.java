//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(
        name = "admins"
)
public class Admin {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long adminId;
    @Column(
            nullable = false
    )
    private String name;
    @Column(
            nullable = false,
            unique = true
    )
    private String email;

    public static AdminBuilder builder() {
        return new AdminBuilder();
    }

    public Long getAdminId() {
        return this.adminId;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setAdminId(final Long adminId) {
        this.adminId = adminId;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Admin)) {
            return false;
        } else {
            Admin other = (Admin)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$adminId = this.getAdminId();
                Object other$adminId = other.getAdminId();
                if (this$adminId == null) {
                    if (other$adminId != null) {
                        return false;
                    }
                } else if (!this$adminId.equals(other$adminId)) {
                    return false;
                }

                Object this$name = this.getName();
                Object other$name = other.getName();
                if (this$name == null) {
                    if (other$name != null) {
                        return false;
                    }
                } else if (!this$name.equals(other$name)) {
                    return false;
                }

                Object this$email = this.getEmail();
                Object other$email = other.getEmail();
                if (this$email == null) {
                    if (other$email != null) {
                        return false;
                    }
                } else if (!this$email.equals(other$email)) {
                    return false;
                }

                return true;
            }
        }
    }

    protected boolean canEqual(final Object other) {
        return other instanceof Admin;
    }

    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $adminId = this.getAdminId();
        result = result * 59 + ($adminId == null ? 43 : $adminId.hashCode());
        Object $name = this.getName();
        result = result * 59 + ($name == null ? 43 : $name.hashCode());
        Object $email = this.getEmail();
        result = result * 59 + ($email == null ? 43 : $email.hashCode());
        return result;
    }

    public String toString() {
        Long var10000 = this.getAdminId();
        return "Admin(adminId=" + var10000 + ", name=" + this.getName() + ", email=" + this.getEmail() + ")";
    }

    public Admin() {
    }

    public Admin(final Long adminId, final String name, final String email) {
        this.adminId = adminId;
        this.name = name;
        this.email = email;
    }

    public static class AdminBuilder {
        private Long adminId;
        private String name;
        private String email;

        AdminBuilder() {
        }

        public AdminBuilder adminId(final Long adminId) {
            this.adminId = adminId;
            return this;
        }

        public AdminBuilder name(final String name) {
            this.name = name;
            return this;
        }

        public AdminBuilder email(final String email) {
            this.email = email;
            return this;
        }

        public Admin build() {
            return new Admin(this.adminId, this.name, this.email);
        }

        public String toString() {
            return "Admin.AdminBuilder(adminId=" + this.adminId + ", name=" + this.name + ", email=" + this.email + ")";
        }
    }
}
