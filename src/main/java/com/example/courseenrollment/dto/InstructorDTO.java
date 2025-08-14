//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.example.courseenrollment.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class InstructorDTO {
    private Long id;
    private @NotBlank(
            message = "Name is required"
    ) String name;
    private @NotBlank(
            message = "Email is required"
    ) @Email(
            message = "Email should be valid"
    ) String email;

    public static InstructorDTOBuilder builder() {
        return new InstructorDTOBuilder();
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setId(final Long id) {
        this.id = id;
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
        } else if (!(o instanceof InstructorDTO)) {
            return false;
        } else {
            InstructorDTO other = (InstructorDTO)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$id = this.getId();
                Object other$id = other.getId();
                if (this$id == null) {
                    if (other$id != null) {
                        return false;
                    }
                } else if (!this$id.equals(other$id)) {
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
        return other instanceof InstructorDTO;
    }

    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $id = this.getId();
        result = result * 59 + ($id == null ? 43 : $id.hashCode());
        Object $name = this.getName();
        result = result * 59 + ($name == null ? 43 : $name.hashCode());
        Object $email = this.getEmail();
        result = result * 59 + ($email == null ? 43 : $email.hashCode());
        return result;
    }

    public String toString() {
        Long var10000 = this.getId();
        return "InstructorDTO(id=" + var10000 + ", name=" + this.getName() + ", email=" + this.getEmail() + ")";
    }

    public InstructorDTO() {
    }

    public InstructorDTO(final Long id, final String name, final String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public static class InstructorDTOBuilder {
        private Long id;
        private String name;
        private String email;

        InstructorDTOBuilder() {
        }

        public InstructorDTOBuilder id(final Long id) {
            this.id = id;
            return this;
        }

        public InstructorDTOBuilder name(final String name) {
            this.name = name;
            return this;
        }

        public InstructorDTOBuilder email(final String email) {
            this.email = email;
            return this;
        }

        public InstructorDTO build() {
            return new InstructorDTO(this.id, this.name, this.email);
        }

        public String toString() {
            return "InstructorDTO.InstructorDTOBuilder(id=" + this.id + ", name=" + this.name + ", email=" + this.email + ")";
        }
    }
}
