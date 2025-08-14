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
        name = "students"
)
public class Student {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long studentId;
    @Column(
            nullable = false
    )
    private String name;
    @Column(
            nullable = false,
            unique = true
    )
    private String email;

    public static StudentBuilder builder() {
        return new StudentBuilder();
    }

    public Long getStudentId() {
        return this.studentId;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setStudentId(final Long studentId) {
        this.studentId = studentId;
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
        } else if (!(o instanceof Student)) {
            return false;
        } else {
            Student other = (Student)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$studentId = this.getStudentId();
                Object other$studentId = other.getStudentId();
                if (this$studentId == null) {
                    if (other$studentId != null) {
                        return false;
                    }
                } else if (!this$studentId.equals(other$studentId)) {
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
        return other instanceof Student;
    }

    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $studentId = this.getStudentId();
        result = result * 59 + ($studentId == null ? 43 : $studentId.hashCode());
        Object $name = this.getName();
        result = result * 59 + ($name == null ? 43 : $name.hashCode());
        Object $email = this.getEmail();
        result = result * 59 + ($email == null ? 43 : $email.hashCode());
        return result;
    }

    public String toString() {
        Long var10000 = this.getStudentId();
        return "Student(studentId=" + var10000 + ", name=" + this.getName() + ", email=" + this.getEmail() + ")";
    }

    public Student() {
    }

    public Student(final Long studentId, final String name, final String email) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
    }

    public static class StudentBuilder {
        private Long studentId;
        private String name;
        private String email;

        StudentBuilder() {
        }

        public StudentBuilder studentId(final Long studentId) {
            this.studentId = studentId;
            return this;
        }

        public StudentBuilder name(final String name) {
            this.name = name;
            return this;
        }

        public StudentBuilder email(final String email) {
            this.email = email;
            return this;
        }

        public Student build() {
            return new Student(this.studentId, this.name, this.email);
        }

        public String toString() {
            return "Student.StudentBuilder(studentId=" + this.studentId + ", name=" + this.name + ", email=" + this.email + ")";
        }
    }
}
