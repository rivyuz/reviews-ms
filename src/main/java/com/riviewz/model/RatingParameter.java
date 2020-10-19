package com.riviewz.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="rating_parameter")
public class RatingParameter {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
	private int id;
	private String indexCatg;
	private String parameter1;
	private String parameter2;
	private String parameter3;
	private String parameter4;
	private String parameter5;
	private String parameter6;
	private String parameter7;
	private String parameter8;
	
	@Transient
	private String entityId;
	@Transient
	private String entityName;
	@Transient
	private String imageName;	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getIndexCatg() {
		return indexCatg;
	}
	public void setIndexCatg(String indexCatg) {
		this.indexCatg = indexCatg;
	}
	public String getParameter1() {
		return parameter1;
	}
	public void setParameter1(String parameter1) {
		this.parameter1 = parameter1;
	}
	public String getParameter2() {
		return parameter2;
	}
	public void setParameter2(String parameter2) {
		this.parameter2 = parameter2;
	}
	public String getParameter3() {
		return parameter3;
	}
	public void setParameter3(String parameter3) {
		this.parameter3 = parameter3;
	}
	public String getParameter4() {
		return parameter4;
	}
	public void setParameter4(String parameter4) {
		this.parameter4 = parameter4;
	}
	public String getParameter5() {
		return parameter5;
	}
	public void setParameter5(String parameter5) {
		this.parameter5 = parameter5;
	}
	public String getParameter6() {
		return parameter6;
	}
	public void setParameter6(String parameter6) {
		this.parameter6 = parameter6;
	}
	public String getParameter7() {
		return parameter7;
	}
	public void setParameter7(String parameter7) {
		this.parameter7 = parameter7;
	}
	public String getParameter8() {
		return parameter8;
	}
	public void setParameter8(String parameter8) {
		this.parameter8 = parameter8;
	}
	public String getEntityId() {
		return entityId;
	}
	public void setEntityId(String entityId) {
		this.entityId = entityId;
	}
	public String getEntityName() {
		return entityName;
	}
	public void setEntityName(String entityName) {
		this.entityName = entityName;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	

}
