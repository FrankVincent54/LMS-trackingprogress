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
        name = "instructors"
)
public class Instructor {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long instructorId;
    @Column(
            nullable = false
    )
    private String name;
    @Column(
            nullable = false,
            unique = true
    )
    private String email;

    public static InstructorBuilder builder() {
        return new InstructorBuilder();
    }

    public Long getInstructorId() {
        return this.instructorId;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setInstructorId(final Long instructorId) {
        this.instructorId = instructorId;
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
        } else if (!(o instanceof Instructor)) {
            return false;
        } else {
            Instructor other = (Instructor)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$instructorId = this.getInstructorId();
                Object other$instructorId = other.getInstructorId();
                if (this$instructorId == null) {
                    if (other$instructorId != null) {
                        return false;
                    }
                } else if (!this$instructorId.equals(other$instructorId)) {
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
        return other instanceof Instructor;
    }

    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $instructorId = this.getInstructorId();
        result = result * 59 + ($instructorId == null ? 43 : $instructorId.hashCode());
        Object $name = this.getName();
        result = result * 59 + ($name == null ? 43 : $name.hashCode());
        Object $email = this.getEmail();
        result = result * 59 + ($email == null ? 43 : $email.hashCode());
        return result;
    }

    public String toString() {
        Long var10000 = this.getInstructorId();
        return "Instructor(instructorId=" + var10000 + ", name=" + this.getName() + ", email=" + this.getEmail() + ")";
    }

    public Instructor() {
    }

    public Instructor(final Long instructorId, final String name, final String email) {
        this.instructorId = instructorId;
        this.name = name;
        this.email = email;
    }

    public static class InstructorBuilder {
        private Long instructorId;
        private String name;
        private String email;

        InstructorBuilder() {
        }

        public InstructorBuilder instructorId(final Long instructorId) {
            this.instructorId = instructorId;
            return this;
        }

        public InstructorBuilder name(final String name) {
            this.name = name;
            return this;
        }

        public InstructorBuilder email(final String email) {
            this.email = email;
            return this;
        }

        public Instructor build() {
            return new Instructor(this.instructorId, this.name, this.email);
        }

        public String toString() {
            return "Instructor.InstructorBuilder(instructorId=" + this.instructorId + ", name=" + this.name + ", email=" + this.email + ")";
        }
    }
}
